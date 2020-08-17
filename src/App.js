import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import useFetchJobs from './useFetchJobs';
import Job from "./job";
import Paginator from './pagination';
import SearchForm from './searchForm';

function App() {
const [params, setParams] = useState({});
const [page, setPage] = useState(1);
const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page);
function handleParamChange (e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1)
    setParams(prevParams => {
      return {...prevParams, [param]: value}
    })
}
  return (
    
   <Container className="my-4">
     <SearchForm params={params} onParamChange={handleParamChange}></SearchForm>
     <Paginator page={page} setPage={setPage} hasNextPage={hasNextPage}/>
     {loading && <h1>Loading...</h1>}
     {error && <h1>Error</h1>}
     {jobs.map(job => {
       return <Job key={job.id} job={job} />
     })}
     <Paginator page={page} setPage={setPage} hasNextPage={hasNextPage}/>
   </Container>
   
  );
}

export default App;
