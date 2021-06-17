import { article_url, country_code,  _api_key } from '../config/rest_config';

export async function getAritcles(category='technology') {

    try{
        let articles = await fetch(`${article_url}?country=${country_code}&category=${category}`,{
            headers:{
                'X-API-KEY': _api_key  
            }
        });
        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch (error){
        throw error;
    }

}