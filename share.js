 "https://www.facebook.com/sharer/sharer.php?u="; 

function shareOnFacebook(){
  const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + 'https://github.com/knoldus/angular-facebook-twitter.git';
  window.open(navUrl , '_blank');
}

const fb = document.getElementById('fb');
fb.addEventListener('click', shareOnFacebook);


`https://twitter.com/intent/tweet?text=`; 

function shareOnTwitter() {
  const navUrl =
    'https://twitter.com/intent/tweet?text=' +
    'https://github.com/knoldus/angular-facebook-twitter.git';
  window.open(navUrl, '_blank');
}

const tweet = document.getElementById('twitter');
tweet.addEventListener('click', shareOnTwitter);
