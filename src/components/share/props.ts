const description = "Search and Nominate up to 5 of your favorite movies in the Shopify Movie Awards";
const url = window.location.href
const title = "The Shoppies"
export const shareProps = [
    {
        name : "Twitter",
        icon : "fab fa-twitter",
        url : encodeURI(`https://twitter.com/intent/tweet?text=${description}&url=${url}`)
    },
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
    }
]