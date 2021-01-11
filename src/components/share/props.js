const description = "Search and Nominate up to 5 of your favorite movies in the Shopify Movie Awards";
const url = window.location.href
const title = "The Shoppies"
export const shareProps = [
    {
        name : "Twitter",
        icon : "fab fa-twitter",
        url : encodeURI(`https://twitter.com/intent/tweet?text=${description}&url=${url}`)
    },
    // {
    //     name : "Facebook",
    //     icon : "fa fa-facebook-square",
    //     // url : ""
    //     // encodeURI(
    //     //     `https://www.facebook.com/dialog/share?app_id=${FB_APP_ID}&display=popup&href=${BASE_URL}${shareURL}&redirect_uri=${BASE_URL}${shareURL}`
    //     // )
    // },
    {
        name : "Linkedin",
        icon : "fab fa-linkedin-in",
        url : encodeURI(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title} &summary=${description} &source=${url}`)
            //   encodeURI(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}&source=${url}`)
    },
    {
        name : "Whatsapp",
        icon : "fa fa-whatsapp",
        url : `https://wa.me/?text=${title} : ${description} url : ${url}`,
        // dataAction : "share/whatsapp/share",
        // title : encodeURI(`Search & Nominate up to 5 of your favorite movies in the Shopify Movie Awards`)
    },
    // {
    //     name : "Reddit",
    //     icon : "fab fa-reddit",
    //     // url : ""
    // },
    // {
        // name : "Tumblr",
        // icon : "fab fa-tumblr",
        // url : "",
        // `http://tumblr.com/widgets/share/tool?canonicalUrl=${url}`
    // },
    // {
    //     name : "Viber",
    //     icon : "fab fa-viber",
    //     // url : ""
    //     // "https://3p3x.adj.st/?adjust_t=u783g1_kw9yml&adjust_fallback=https%3A%2F%2Fwww.viber.com%2F%3Futm_source%3DPartner%26utm_medium%3DSharebutton%26utm_campaign%3DDefualt&adjust_campaign=Sharebutton&adjust_deeplink=" 
    //     //       + encodeURIComponent("viber://forward?text=" 
    //     //       + encodeURIComponent(title + " " + window.location.href))
    // },
    // {
    //     name : "Telegram",
    //     icon : "fab fa-telegram",
    //     // url : ""
    //     // `https://t.me/share/url?url=${url}&text=${title}`
    // },
    // {
    //     name : "Wechat",
    //     icon : "fa fa-weixin",
    //     // url : ""
    // },
    // {
    //     name : "Email",
    //     icon : "fas fa-envelope",
    //     url : `mailto:?to=edekobifrank@gmail.com &subject=Hi Frank &body=I'm interested in...`
    // }
]