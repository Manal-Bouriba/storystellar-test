

let env = 'https://storyscope.storystellar.com'

export async function getCategories() {
    const response = await fetch(env + '/api/category', {
        method: "GET" 
      });
    if (!response.ok) {
        throw new Error({ message: 'Failed to fetch posts.', status:500});
    }
    return response.json();
}

export async function getCategory(slug) {
    const response = await fetch(env + '/api/category/by_slug/' + slug , {
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({ message: 'Failed to fetch posts.', status:404});
    }
    return response.json();
}

export async function getCity(slug) {
    const response = await fetch(env + '/api/city/by_slug/' + slug , {
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({ message: 'Failed to fetch posts.', status:404});
    }
    return response.json();
}

export async function getAgencies(slug,city, page, order) {
    if (!page) {
        page = 1
    }
    const response = await fetch(env + '/api/agency/by_category_city/'+slug + '/'+ city +'/order_'+order + '?page=' + page,{
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({ message: 'Failed to fetch posts.', status:404});
    }
    return response.json();
}

export async function getFeaturedAgencies() {

    const response = await fetch(env + '/api/agency/featured',{
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({ message: 'Failed to fetch posts.', status:404});
    }
    return response.json();
}


export async function getCities() {
    const response = await fetch(env + '/api/city', {
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response.json()
}

export async function slugifyCities() {
    const response = await fetch(env + '/api/city/slugify', {
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response.json()
}

export async function slugifyCategories() {
    const response = await fetch(env + '/api/category/slugify', {
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response.json()
}

export async function getAgenciesAll(slug) {

    const response = await fetch(env + '/api/agency/by_category/'+slug ,{
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({ message: 'Failed to fetch posts.', status:404});
    }
    return response.json();
}

export async function deleteCity(id) {
    const response = await fetch(env + '/api/city/' + id, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response
}

export async function deleteAgency(id) {
    const response = await fetch(env + '/api/agency/' + id, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response
}

export async function deleteCategory(id) {
    const response = await fetch(env + '/api/category/' + id, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response
}
export async function addCity(name, inhabitants) {
    const req = {name: name, inhabitants: inhabitants}
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
    };
    const response = await fetch(env + '/api/city/create',  requestOptions);
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response
}

export async function addAgency(name, rating, reviews, city,category,website, logo, featured) {
    const req = {name: name, rating: rating, reviews: reviews, city_id: city, category_id: category, website: website, logo: logo, featured: featured}
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
    };
    const response = await fetch(env + '/api/agency/create',  requestOptions);
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response
}

export async function addCategory(name, image, displayName) {
    const req = {name: name, image: image, display_name: displayName}
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
    };
    const response = await fetch(env + '/api/category/create',  requestOptions);
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response
}
export async function editCity(id,name,inhabitants) {
    const req = {name:name, inhabitants: inhabitants}
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req)
    };
    const response = await fetch(env + '/api/city/'+id,  requestOptions);
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response
}

export async function editAgency(id, name, rating, reviews, city,category,website, logo, featured) {
    let isfeatured
    if (featured) {
        isfeatured = true
    }
    else {
        isfeatured = false
    }
    const req = {name: name, rating: rating, reviews: reviews, city_id: city, category_id: category, website: website, logo: logo, featured: isfeatured}
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req)
    };
    const response = await fetch(env + '/api/agency/'+id,  requestOptions);
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response
}

export async function editCategory(id,name,image, displayName) {
    const req = {name:name,image: image, displayName:displayName}
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req)
    };
    const response = await fetch(env + '/api/category/'+id,  requestOptions);
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response
}

export async function refreshAgencies(category, city) {
    const req = {category: category, city: city}
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req)
    };
    const response = await fetch(env + '/api/refresh-results/' , requestOptions);
    if (!response.ok) {
        throw new Error({message: 'Failed to fetch cities', status:404})
    }
    return response.json()
}
