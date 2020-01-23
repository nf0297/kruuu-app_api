const models = require('../models')
const talent = models.talent
const job = models.job
const company = models.company

exports.selectAll = (req, res) => {
    talent.findAll({
        attributes: ["id", "fullname", "occupation", "image"],
        include:
        [{model: company, as:"Company", attributes: ["name", "image", "location"]}],
        [{model: job, as:"Job", attributes: ["title", "image", "launch_date", "is_done"]}]
    })
    .then(talent => {
        res.send({
            message: "Talent Selected Successfully!",
            talent,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Talent! Please fix your code!",
            err,
            error: true
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    talent.findOne({
        where: {id:parameter},
        attributes: ["id", "fullname", "occupation", "image"],
        include:
        [
            {model: job, as:"Job", attributes: ["title", "image", "launch_date", "is_done"]}
        ]
    })
    .then(talent => {
        res.send({
            message: "Talent Selected Successfully!",
            talent,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Talent! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.addTalent = (req, res) => {
    talent.create(req.body)
    .then(talent => {
        res.send({
            message: "Add Talent Success!",
            talent,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Add New Talent! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.deleteByID = (req, res) => {
    const parameter = req.params.id
    talent.destroy({
        where: {id:parameter}
    })
    .then(talent => {
        res.send({
            message: "Talent Deleted!",
            talent,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Talent Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    talent.update({
        where: {id:parameter}
    })
    .then(talent => {
        res.send({
            message: "Update Talent Success!",
            talent,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Talent Failed!",
            err,
            error:false
        })
    })
}
