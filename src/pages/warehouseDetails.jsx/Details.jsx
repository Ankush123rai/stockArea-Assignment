import React from 'react'
import styles from './Details.module.css'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    return (
        <div className={styles.details}>
        <h1>Warehouse Details</h1>
        <p>Warehouse id: {id}</p>
        </div>
    )
}

export default Details