<?php
/**
 * Minimal PHP Email Form replacement
 * Provides a compatible subset of the original library used by contact.php
 * Note: This is a simple fallback implementation that uses PHP's mail().
 * For production use with SMTP, replace with the official library.
 */

class PHP_Email_Form {
  public $ajax = false;
  public $to = '';
  public $from_name = '';
  public $from_email = '';
  public $subject = '';
  public $smtp = null; // optional array if user configures

  private $messages = array();

  public function __construct() {}

  public function add_message($value, $label = '', $min_length = 0) {
    $value = trim($value);
    if ($min_length && strlen($value) < $min_length) {
      return false;
    }
    $this->messages[] = array('label' => $label, 'value' => $value);
    return true;
  }

  public function send() {
    if (empty($this->to)) {
      return 'No recipient specified.';
    }

    $body = "";
    foreach ($this->messages as $m) {
      if ($m['label']) {
        $body .= $m['label'] . ': ' . $m['value'] . "\n";
      } else {
        $body .= $m['value'] . "\n";
      }
      $body .= "\n";
    }

    $subject = !empty($this->subject) ? $this->subject : 'Contact Form Message';

    $from_email = filter_var($this->from_email, FILTER_VALIDATE_EMAIL) ? $this->from_email : $this->to;
    $from_name = !empty($this->from_name) ? $this->from_name : 'Website';

    $headers = 'From: ' . $from_name . ' <' . $from_email . '>' . "\r\n";
    $headers .= 'Reply-To: ' . $from_email . "\r\n";

    // Basic mail() fallback. If SMTP is required, user should install official library.
    $sent = @mail($this->to, $subject, $body, $headers);
    if ($sent) {
      return 'OK';
    }

    return 'Could not send email. Enable PHP mail() or configure SMTP.';
  }
}

?>
