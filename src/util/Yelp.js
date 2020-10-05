
const apiKey = 'APjyC1PBySIWQufu-So0MViUH9my22P2YfMRLeVOmQ_kB5Ny0tELTa2QS_1ML-9NlnaU7h-somXy5M3mIzzPJMuyydCgWOdwE_X3BEKqzla9v4gTdBAe7UY3G256X3Yx';

const Yelp = {

    search(term, location, sortBy) {
        const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
        const url = cors_anywhere + `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    
        return fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
           return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                });
            }
        });
    }
};

export default Yelp;
