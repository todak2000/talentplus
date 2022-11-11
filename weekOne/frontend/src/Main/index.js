import React,{ useState, useEffect } from 'react'
function Home() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch("/home")
      .then(res=> res.json())
      .then(jsonRes=>{
        setLoading(false)
        if (jsonRes.success !== true) {
            setData(jsonRes.message)
        }
        setData(jsonRes.data)
      })
      .catch(err=> {
        setLoading(false)
        console.log(err)
      })
    }, [data])
    
  return (
    <div className="App">
        {loading ?
        <h3>Loading</h3> 
        :
      <h1>{data !== "" && data}</h1>
        }
    </div>
  );
}

export default Home;
