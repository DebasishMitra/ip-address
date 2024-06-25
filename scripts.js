document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip').textContent = data.ip;
            return fetch(`https://ipapi.co/${data.ip}/json/`);
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = `${data.city}, ${data.region}, ${data.country_name}`;
            document.getElementById('isp').textContent = data.org;
        })
        .catch(error => console.error('Error fetching IP info:', error));

    const getBrowserInfo = () => {
        let userAgent = navigator.userAgent;
        let browser = "Unknown";
        let os = "Unknown";

        // Browser detection
        if (userAgent.indexOf("Firefox") > -1) {
            browser = "Mozilla Firefox";
        } else if (userAgent.indexOf("SamsungBrowser") > -1) {
            browser = "Samsung Internet";
        } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
            browser = "Opera";
        } else if (userAgent.indexOf("Trident") > -1) {
            browser = "Internet Explorer";
        } else if (userAgent.indexOf("Edge") > -1) {
            browser = "Microsoft Edge";
        } else if (userAgent.indexOf("Chrome") > -1) {
            browser = "Google Chrome";
        } else if (userAgent.indexOf("Safari") > -1) {
            browser = "Safari";
        }

        // OS detection
        if (userAgent.indexOf("Windows NT 10.0") !== -1) os = "Windows 10";
        else if (userAgent.indexOf("Windows NT 6.2") !== -1) os = "Windows 8";
        else if (userAgent.indexOf("Windows NT 6.1") !== -1) os = "Windows 7";
        else if (userAgent.indexOf("Windows NT 6.0") !== -1) os = "Windows Vista";
        else if (userAgent.indexOf("Windows NT 5.1") !== -1) os = "Windows XP";
        else if (userAgent.indexOf("Mac OS X") !== -1) os = "Mac OS X";
        else if (userAgent.indexOf("Android") !== -1) os = "Android";
        else if (userAgent.indexOf("like Mac") !== -1) os = "iOS";

        document.getElementById('browser').textContent = browser;
        document.getElementById('os').textContent = os;
    };

    getBrowserInfo();
});
