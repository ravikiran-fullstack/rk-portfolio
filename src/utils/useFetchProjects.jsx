import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'ab6dozws3yem',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'lSImmEijQK2Zwnjz-WBDiYVoG__rFgVMIrkoKWNd_Q4',
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
