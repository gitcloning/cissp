/*!
 * Copyright (C) 2019  Josh Habdas <jhabdas@protonmail.com>
 *
 * This file is part of After Dark.
 *
 * After Dark is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * After Dark is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

(function (window, document, undefined) {
  'use strict';
  const form = document.forms.generator;
  form.reset();
  const isOnlineHelp = document.URL.includes('localhost:1414');
  if (!isOnlineHelp) return;
  form.querySelector('.js-useonlinehelp').style.display = 'none';
  if (window.navigator.onLine) {
    form.querySelector('.js-disconnect').style.display = 'block';
  }
  const activate = () => {
    form.querySelector('.js-disconnect').style.display = 'block';
    form.generate.disabled = true;
    form.address.disabled = true;
    form.address.value = '';
    form.generate.classList.add('muted');
  };
  const deactivate = () => {
    form.querySelector('.js-disconnect').style.display = 'none';
    form.generate.disabled = false;
    form.address.disabled = false;
    form.generate.classList.remove('muted');
  };
  window.addEventListener('online', activate);
  window.addEventListener('offline', deactivate);
  if (!window.navigator.onLine) deactivate();
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    const isLocal = document.location.host.includes('localhost');
    const hasSameOrigin = form.action.includes(document.location.origin);
    if (isLocal && hasSameOrigin) {
      evt.target.submit();
    } else {
      form.querySelector('.js-usesameorigin').style.display = 'block';
      deactivate();
    }
  })
})(window, document);
