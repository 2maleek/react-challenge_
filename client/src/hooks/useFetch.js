import { useState, useEffect } from 'react';

export default (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.status_code) {
        throw data
      }
      console.log(data)
      setData(data.results)
    })
    .catch(error => {
      setError(error.status_message)
    })
    .finally(() => setLoading(false))
  }, [url]);

  return [data, setData, loading, error];
}
