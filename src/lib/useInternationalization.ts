import { useState, useEffect } from "react";
import { formatContentDataAsPerResource } from "../utility";
import i18next from "./i18n";
const useInternationalization = (projectId: string) => {
  const [resources, setResources] = useState({});

  useEffect(() => {
    const getResources = async () => {
      const response = await await fetch(
        `https://contentmanagementservice.onrender.com/ContentManagement/${projectId}`
      );
      const responseData = await response.json();
      if (response.status === 200 && responseData?.existingData) {
        const formattedData= formatContentDataAsPerResource(responseData?.existingData)
        setResources(
            formattedData
        );
        i18next.init({
            resources:formattedData,
            lng:"en",
        })
      }
    };
    getResources();
  }, [projectId]);

  return resources;
};


export default useInternationalization;
