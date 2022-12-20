import Link from 'next/link';
import React from 'react'
import styles from '../../styles/people.module.css'

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props : {
            people : data
        }
    }
}

const People = ({people}) => {
  return (
    <div>
        <h1>All People</h1>
            {people.map(person => (
        <Link href={`/people/${person.id}`} key={person.id}>
            <span className={styles.single}>
               <h3>{person.name}</h3> 
            </span>    
        </Link>
            ))}
    </div>
  )
}

export default People