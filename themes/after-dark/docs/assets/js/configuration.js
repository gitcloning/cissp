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
  const isOnlineHelp = document.URL.includes('localhost:1414');
  if (!isOnlineHelp) return;
  if (!document.location.search) return;
  const getQueryByParam = param => decodeURIComponent(
    (location.search.split(param + '=')[1] || '').split('&')[0]
  ).replace(/\+/g, ' ');
  const set = (from, to) => {
    document.body.innerHTML = document.body.innerHTML.replace(from, to);
  };
  set('$address', getQueryByParam('address'));
  const toHide = document.querySelectorAll('.js-tohide');
  const toShow = document.querySelectorAll('.js-toshow');
  toHide.forEach(el => el.style.display = 'none');
  toShow.forEach(el => el.style.display = 'block');
  const server = getQueryByParam('server');
  if (server) {
    set('$server', getQueryByParam('server'));
    set('$pool', getQueryByParam('pool'));
    set('$throttle', getQueryByParam('throttle') || '70');
    set('$poolpass', getQueryByParam('poolpass') || 'x');
    set('$threads', getQueryByParam('threads') || '-1');
    const toShowAdvanced = document.querySelectorAll('.js-showadvanced');
    const toHideAdvanced = document.querySelectorAll('.js-hideadvanced');
    toShowAdvanced.forEach(el => el.style.display = 'block');
    toHideAdvanced.forEach(el => el.style.display = 'none');
  }
  window.history.replaceState(
    {}, null, `${window.location.origin}${window.location.pathname}`
  );
})(window, document);
