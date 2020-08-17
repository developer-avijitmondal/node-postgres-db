var express = require('express');
var router = express.Router();
require('dotenv').config();
const db = require("../../models");
// const esClient = require('../../api/routes/esClient');
const httpStatus = require('http-status');
// const { createIndex,deleteIndex,insertDoc,
//     indexExists,updateDoc,deleteDoc,searchDoc,countDocuments } = require('../../api/routes/esMethods');
const franchises_businessunitgroup = db.franchises_businessunitgroup;
const defaultIndex = process.env.ELASTIC_INDEX;
const index = defaultIndex+'franchises_businessunitgroup';
const _type = 'businessunitgroup';
//const _type = '_doc';
const async = require("async");
const returnPayLoad = {};
// const logger = require('../../config/logger.config');

// exports.searchDoc = async function(indexName, mappingType, payload){
//     return await { user: 'userRecord', company: 'companyRecord' };
// };

exports.getAll = async function(payLoadQuery){  
    //console.log(payLoadQuery);
    // logger.info('Fetching all franchises group');
    result = await franchises_businessunitgroup.findAll({
        offset: payLoadQuery.offset, limit: payLoadQuery.limit,
            order: [
            ['id', 'DESC']
        ]
        //attributes: ['id','languageID', 'BusinessUnitGroupName'],
        // include: [{
        //     model: Language,
        //     as: 'Language'
        // }]
    });
    //console.log(result);
    if(result.length>0){
        return { status: httpStatus.OK, error: false, type : 'success',result: result };
    }else{
        // logger.warn('franchises group not found');
        return { status: httpStatus.NOT_FOUND,  error: true, type: 'danger',result: 'no data found' };
    }
    //return await { user: 'userRecord', result: result };
};

exports.createNew = async function(data){  
    // const respInsertDoc = indexExists(index);
    // if(!respInsertDoc){
    //     const resp = createIndex(index);
    //     //console.log(resp);
    // }
    try {
        // logger.info('create new franchises group');
        const resultCreate = await franchises_businessunitgroup.create(data);
        console.log(resultCreate.id);
        if(resultCreate.id) {
            // logger.info('franchises group created successfully');
            // const esInsertDoc = insertDoc(index, resultCreate.id, _type, resultCreate);
            return { status: httpStatus.CREATED, error: false, type : 'success',result: resultCreate };
        } else {
            // logger.warn('franchises group not created');
            return {status: httpStatus.UNPROCESSABLE_ENTITY,  error: true, type: 'danger',result: 'New data not created' };
        }
        
    } catch (error) {
        console.log(error);
        // logger.error(error.message || 'Some error occurred while create the franchises group');
        return {status: httpStatus.UNPROCESSABLE_ENTITY,  error: true, type: 'danger',result: error };
    }
};

exports.deleteAll = async function(){  
    try {
        // logger.info('delete all franchises group');
        const deleteAll = await franchises_businessunitgroup.destroy({ 
            where: {} 
        });
        //console.log(deleteAll);
        // const resp = deleteIndex(index);
        // logger.info('franchises group deleted successfully');
        return { status: httpStatus.OK, error: false, type : 'success',result: 'deleted all data' };
    }catch (error) {
        // logger.error(error.message || 'Some error occurred while delete all the franchises group');
        return {status: httpStatus.UNPROCESSABLE_ENTITY,  error: true, type: 'danger',result: error };
        console.log(error);
    }
};

// exports.getOne = async function(businessunitgroup_id){  
//     try {
//         // logger.info('Fetching single franchises group with ID ', businessunitgroup_id);
//         const query = {
//             query: {
//                 match: {
//                     "_id": businessunitgroup_id
//                 }
//             }
//         }
//         const resp = await searchDoc(index,_type, query);
//         //console.log(resp.hits.hits);
//         if(resp.hits.hits.length!=0){
//             // logger.info('franchises group get successfully');
//             return { status: httpStatus.OK, error: false, type : 'success',result: resp.hits.hits };
//         }else{
//             // logger.warn('franchises group not found with ID ', businessunitgroup_id);
//             return { status: httpStatus.NOT_FOUND,  error: true, type: 'danger',result: 'no data found' };

//         }
//     }catch (error) {
//         // logger.error(error.message || 'Some error occurred while getting the franchises group');
//         return {status: httpStatus.UNPROCESSABLE_ENTITY,  error: true, type: 'danger',result: error };
//         console.log(error);
//     }
// };

exports.updateOne = async function(businessunitgroup_id,data){  
    try {
        const updateOne = await franchises_businessunitgroup.update(
            data,
            { where:{ 
                id: businessunitgroup_id
            } 
        });
        // console.log(updateOne);
        if(updateOne){
            // const resp = deleteDoc(index, businessunitgroup_id, _type);
            getOne = await franchises_businessunitgroup.findOne({
                where: {
                    id: businessunitgroup_id
                },
            });
            // logger.info('franchises group updated successfully');
            // const respInsertDoc = insertDoc(index, businessunitgroup_id, _type, getOne);
            return { status: httpStatus.OK, error: false, type : 'success',result: getOne };
        }
    }catch (error) {
        // logger.error(error.message || 'Some error occurred while update the franchises group');
        return {status: httpStatus.UNPROCESSABLE_ENTITY,  error: true, type: 'danger',result: error };
        console.log(error);
    }
};

exports.deleteOne = async function(businessunitgroup_id){  
    try {
        // logger.info('Deleting single franchises group with ID ', businessunitgroup_id);
        const findOne = await franchises_businessunitgroup.findOne({
            where: {
                id: businessunitgroup_id
            },
        });
        if(findOne){
            const deleteOne = await franchises_businessunitgroup.destroy({
                where: {
                    id: businessunitgroup_id
                },
            });
            if(deleteOne){
                // const resp = deleteDoc(index, businessunitgroup_id, _type);
                // logger.info('franchises group deleted successfully');
                return { status: httpStatus.OK, error: false, type : 'success',result: 'deleted successfully' };
            }
        }else{
            // logger.warn('franchises group not found with ID ', businessunitgroup_id);
            return { status: httpStatus.NOT_FOUND,  error: true, type: 'danger',result: 'no data found' };
        }
    }catch (error) {
        // logger.error(error.message || 'Some error occurred while delete the franchises group');
        return {status: httpStatus.UNPROCESSABLE_ENTITY,  error: true, type: 'danger',result: error };
        console.log(error);
    }
};


