<?php
// Password to hash
$password = 'admin123';

// Generate a secure hash using the default PHP password hashing algorithm (currently bcrypt)
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Print the hashed password
echo "Original Password: $password\n";
echo "Hashed Password: $hashed_password\n";

// Verify the password (demonstration)
if (password_verify($password, $hashed_password)) {
    echo "Password verification successful!\n";
} else {
    echo "Password verification failed.\n";
}
?>
