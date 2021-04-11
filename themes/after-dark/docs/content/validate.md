+++
title = "Validate Release"
description = "Complete the included form to validate the release."
noindex = true
[[copyright]]
  owner = "Josh Habdas"
  date = "2019"
  license = "agpl-3.0-or-later"
+++

{{< hackcss-form name="validate" action="/validate/" >}}
  {{< hackcss-formgroup name="integrity" >}}
    {{< hackcss-label for="digest" >}}
      <abbr title="Secure Hash Algorithm">SHA-512</abbr> Digest:
    {{< /hackcss-label >}}
    {{< hackcss-textinput
        required="true"
        autocomplete="off"
        spellcheck="false"
        type="text" id="digest" name="digest"
        pattern="^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
        placeholder="whUlqT0w6vfvTzd12LpU5kst/Cz3yt9j3ncIHcB4CDQFFiMVPlfX/I+vKl3Y98faqBLlgh6M4pyhiYzZNIPUPA=="
    >}}
    {{< hackcss-helpblock >}}
      Submit with 9.2.3 <a href="/feature/release-hashes">Release Hash</a> to validate.
      <noscript>JavaScript required for proper validation.</noscript>
    {{< /hackcss-helpblock >}}
  {{< /hackcss-formgroup >}}
{{< /hackcss-form >}}

<small>Valid installations use the [Quick Install](/feature/quick-install) or [Upgrade Script](/feature/upgrade-script) and may be checked offline. See [Release Hashes](/feature/release-hashes) for a more thorough approach to validation.</small>

<script>
  (function (window, document, undefined) {
    "use strict";
    const digest = 'KxMbfuJ2nWTL3HOwBj/h34eF+l4t1EG56docvU4ENooyht2NXEiBWZzKhPue5liWNtKOPu21LQHiup8rc6enOw==';
    const confirm = form => {
      form.digest.readOnly = true;
      form.digest.value = digest;
      form.integrity.classList.add('form-success');
      const message = "Hash verified. Valid installation detected."
      form.querySelector('.help-block').innerHTML = message;
    };
    const validate = (search, form) => {
      search.includes(encodeURIComponent(digest)) ? confirm(form) : challenge(form);
    };
    const challenge = form => {
      form.digest.value = digest;
      const check = () => {
        const classes = form.integrity.classList;
        if (form.checkValidity()) {
          classes.add('form-success');
          classes.remove('form-warning');
        } else {
          classes.add('form-warning');
          classes.remove('form-success');
        }
      };
      form.oninput = check;
      document.location.search && (() => {
        form.integrity.classList.add('form-error');
        document.title = "Invalid Hash | After Dark";
        const help = form.querySelector('.help-block');
        help.innerHTML = help.innerText = "Unexpected hash. Please try again.";
        const alert = document.createElement('div');
        alert.classList.add('alert');
        alert.classList.add('alert-warning');
        alert.innerHTML = '<strong>WARNING:</strong> Your installation is invalid or has been tampered with. Please run the <a href="/feature/upgrade-script">Upgrade Script</a> to download the latest version.';
        document.querySelector('main').appendChild(alert);
      })();
    };
    const initialize = () => {
      const form = document.forms.validate;
      (document.location.search.replace('?digest=','').length)
        ? validate(location.search, form)
        : challenge(form);
    };
    document.onreadystatechange = () => {
      document.readyState === 'interactive' && initialize();
    };
  })(window, document);
</script>
