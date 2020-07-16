import React from 'react';
import { Layout, Row } from 'antd';
import Card from './Card'
import appStyles from '../styles/app.module.scss'

const CardList = (props)  => {

    return (
        <>
            <Card feedId={1}/>
            <Card feedId={2}/>
        </>

    )
}

export { CardList as default }