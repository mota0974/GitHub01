
document.addEventListener('DOMContentLoaded', function() {
    var banners = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
    var index = 0
    var bannerImg = document.getElementById('banner')

    function cambiarBanner() {
        bannerImg.src = 'banners/' + banners[index]
        index = (index + 1) % banners.length
    }
    setInterval(cambiarBanner, 5000)
})


















