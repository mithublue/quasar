module.exports=function(n){function s(t){if(a[t])return a[t].exports;var i=a[t]={exports:{},id:t,loaded:!1};return n[t].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}var a={};return s.m=n,s.c=a,s.p="",s(0)}({0:function(n,s,a){n.exports=a(43)},43:function(n,s,a){"use strict";var t=a(44);n.exports=function(n){quasar.current.layout.vm.$data.title="Chat",n({template:t})}},44:function(n,s){n.exports='<div style="max-width: 500px;">\n  <div class="chat-other">\n    <div class="chat-user">\n      <img src="assets/linux-avatar.png">\n    </div>\n    <div class="chat-date">\n      7 minutes ago\n    </div>\n    <div class="chat-message">\n      <p>\n        hey, if you type in your pw, it will show as stars\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-other">\n    <div class="chat-user">\n      <img src="assets/linux-avatar.png">\n    </div>\n    <div class="chat-date">\n      7 minutes ago\n    </div>\n    <div class="chat-message">\n      <p>\n        ********* see!\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-you">\n    <div class="chat-user">\n      <img src="assets/boy-avatar.png">\n    </div>\n    <div class="chat-date">\n      4 minutes ago\n    </div>\n    <div class="chat-message">\n      <p>\n        hunter2\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-you">\n    <div class="chat-user">\n      <img src="assets/boy-avatar.png">\n    </div>\n    <div class="chat-date">\n      4 minutes ago\n    </div>\n    <div class="chat-message">\n      <p>\n        doesn\'t look like stars to me\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-other">\n    <div class="chat-user">\n      <img src="assets/linux-avatar.png">\n    </div>\n    <div class="chat-date">\n      3 minutes ago\n    </div>\n    <div class="chat-message">\n      <p>\n        *******... this is what I see. You can also write hunter2-ing my-hunter2 whunter2x.\n        People only see ******-ing my-*****...\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-you">\n    <div class="chat-user">\n      <img src="assets/boy-avatar.png">\n    </div>\n    <div class="chat-date">\n      3 minutes ago\n    </div>\n    <div class="chat-message">\n      <p>\n        awesome!\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-you">\n    <div class="chat-user">\n      <img src="assets/boy-avatar.png">\n    </div>\n    <div class="chat-date">\n      3 minutes ago\n    </div>\n    <div class="chat-message">\n      <p>\n        didn\'t know that\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-you">\n    <div class="chat-user">\n      <img src="assets/boy-avatar.png">\n    </div>\n    <div class="chat-date">\n      1 minute ago\n    </div>\n    <div class="chat-message">\n      <p>\n        wait, how do you know my pw?\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-other">\n    <div class="chat-user">\n      <img src="assets/linux-avatar.png">\n    </div>\n    <div class="chat-date">\n      A few second ago\n    </div>\n    <div class="chat-message">\n      <p>\n        er, I just copy pasted YOUR ******\'s and it appears to YOU as hunter2 cause its your pw\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-you">\n    <div class="chat-user">\n      <img src="assets/boy-avatar.png">\n    </div>\n    <div class="chat-date">\n      Just now\n    </div>\n    <div class="chat-message">\n      <p>\n        oh, ok.\n      </p>\n    </div>\n  </div>\n\n  <div class="chat-other">\n    <div class="chat-user">\n      <img src="assets/linux-avatar.png">\n    </div>\n    <div class="chat-date">\n      Typing...\n    </div>\n    <div class="chat-message">\n      <p>\n        <spinner name="dots" color="#fff" :size="30"></spinner>\n      </p>\n    </div>\n  </div>\n</div>\n'}});