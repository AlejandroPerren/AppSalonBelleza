const backenDomain = "http://localhost:8080"; 


const SummaryApi = {
    Login : {
        url : `${backenDomain}/login`,
        method : 'post'
    },
    Register : {
        url : `${backenDomain}/register`,
        method : 'post'
    },
    Services : {
        url : `${backenDomain}/services`,
        method : 'get'
    },
    createServices : {
        url : `${backenDomain}/createServices`,
        method : 'post'
    },
    deleteServices : {
        url : `${backenDomain}/deleteService`,
        method : 'delete'
    },
    updateServices : {
        url : `${backenDomain}/updateService`,
        method : 'put'
    },
    getDates : {
        url : `${backenDomain}/getDates`,
        method : 'get'
    },
    createDates : {
        url : `${backenDomain}/createDates`,
        method : 'post'
    },

    
}


export default SummaryApi