export const max = 5;

export const notification = {
    maxNomination : { 
        msg : `Congratulations, You have completed your ${max} favourite movie nominations`,
        tip : "" 
    },
    exceedNomination : { 
        msg : `Your ${max} favourite movie nominations is complete`,
        tip : "You can replace movies in the nomination list by clicking the remove button" 
    },
    noNomination : { 
        msg : "You have removed all your movie nominations",
        tip : "" 
    },
    existingNomination : {
        msg : "You have already nominated this movie",
        tip : ""
    }
}