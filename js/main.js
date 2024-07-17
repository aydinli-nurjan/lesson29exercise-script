
function main(){
    let width = document.getElementById('width').value
    let height = document.getElementById('height').value
    let bg = document.getElementById('bg').value
    let bordRadius = document.getElementById('bordRadius').value
    let float = document.getElementById('float').value
    let textColor = document.getElementById('textColor').value
    let border = document.getElementById('border').value
    let bcksize = document.getElementById('bcksize').value
    let bckpos = document.getElementById('bckpos').value

    let div = document.getElementById('main')
    div.style.width = width
    div.style.height = height
    div.style.background = bg
    div.style.borderRadius = bordRadius
    div.style.float = float
    div.style.color = textColor
    div.style.border = border
    switch(photo.value.toLowerCase()) {
        case "batman":
            div.style.backgroundImage = "url('https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/56073/article_full%403x.jpg')"
            div.style.backgroundRepeat = "no-repeat"
            break;
        case "minions":
            div.style.backgroundImage = "url('https://variety.com/wp-content/uploads/2013/05/minion-biz-featured.jpg?w=1000&h=563&crop=1')"
            div.style.backgroundRepeat = "no-repeat"
            break;
        case "marvel characters":
            div.style.backgroundImage = "url('https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/Header-and-social-image-of-big-name-Marvel-heroes.jpg')" 
            div.style.backgroundRepeat = "no-repeat"   
            break;
        default:
            div.style.background = "white"
    }
    div.style.backgroundSize = bcksize
    div.style.backgroundPosition = bckpos
}