import React from 'react'
import { Form, Col } from 'react-bootstrap'

const searchForm = ({params, onParamChange}) => {
    return (
        <Form>
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={onParamChange} value={params.description} name="description" type="text"></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Control onChange={onParamChange} value={params.location} name="location" type="text"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} className="mb-4">
                <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" label="Only Full Time" type="checkbox"></Form.Check>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

export default searchForm; 