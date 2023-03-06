export async function getCategories() {
    const response = await fetch('http://127.0.0.1:5000/api/category', {
        method: "GET" 
      });
    if (!response.ok) {
        throw new Error({ message: 'Failed to fetch posts.', status:500});
    }
    return response.json();
}

export async function getCategory(slug) {
    const response = await fetch('http://127.0.0.1:5000/api/category/by_slug/' + slug , {
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({ message: 'Failed to fetch posts.', status:404});
    }
    return response.json();
}

export async function getAgencies(slug) {
    const response = await fetch('http://127.0.0.1:5000/api/agency/by_category/'+slug,{
        method: "GET"
    });
    if (!response.ok) {
        throw new Error({ message: 'Failed to fetch posts.', status:404});
    }
    return response.json();
}