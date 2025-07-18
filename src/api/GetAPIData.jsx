export const GetMoviesData = async () => {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=Titanic`
        );
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error)
    }
} 