import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: import.meta.env.VITE_CONTENTFUL_API_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: import.meta.env.VITE_CONTENTFUL_API_ACCESS_TOKEN,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projectsData, setProjectsData] = useState([]);

  const fetchProjectsData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      });
      setLoading(false);
      // console.log(response);
      const projectsInfo = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const imageUrl = image?.fields?.file?.url;
        return { title, url, imageUrl };
      });
      console.log('projectsInfo', projectsInfo);
      setProjectsData(projectsInfo);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('useFetch is running');
    fetchProjectsData();
  }, []);

  return { loading, projectsData };
};

export default useFetchProjects;

// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token
