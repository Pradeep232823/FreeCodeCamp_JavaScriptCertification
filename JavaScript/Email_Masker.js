function maskEmail(email) {
    const at = email.indexOf("@");
    const name = email.slice(0, at);
    const domain = email.slice(at);

    return name[0] + "*".repeat(name.length - 2) + name[name.length - 1] + domain;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));
