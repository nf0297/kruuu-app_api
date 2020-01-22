const models = require('../models')
const job = models.job
const talent = models.talent

exports.selectAll = (req, res) => {
    job.findAll({
        attributes:["id", "title", "image", "launch_date", "is_done"],
        include: 
        [{model:talent, as: "Talent", attributes:["id", "fullname", "image"]}]
    })
    .then(job => {
        res.send({
            message: "Job Selected Successfully!",
            job,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Job! Please fix your code!",
            err,
            error: true
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    job.findOne({
        where: {id:parameter},
        attributes:["id", "title", "image", "launch_date", "is_done"],
        include: [{model:talent, as: "Talent", attributes:["id", "fullname", "image"]}]
    })
    .then(job => {
        res.send({
            message: "Job Selected Successfully!",
            job,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Job! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.addJob = (req, res) => {
    job.create(req.body)
    .then(job => {
        res.send({
            message: "Add Job Success!",
            job,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Add New Job! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.deleteByID = (req, res) => {
    const parameter = req.params.id
    job.destroy({
        where: {id:parameter}
    })
    .then(job => {
        res.send({
            message: "Job Deleted!",
            job,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Job Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    job.update({
        where: {id:parameter}
    })
    .then(job => {
        res.send({
            message: "Update Job Success!",
            job,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Job Failed!",
            err,
            error:false
        })
    })
}