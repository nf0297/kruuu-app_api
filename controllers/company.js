const models = require('../models')
const company = models.company

exports.selectAll = (req, res) => {
    company.findAll({
        include: 
        [
            {
                model:talent, as: "Talent", attributes:["id", "fullname", "image"]
            }
        ]
    })
    .then(company => {
        res.send({
            company,
        })
    })
    .catch(err => {
        res.send({
            err,
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    company.findOne({
        where: {id:parameter}
    })
    .then(company => {
        res.send({
            message: "Company Selected Successfully!",
            company,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Company! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.addCompany = (req, res) => {
    company.create(req.body)
    .then(company => {
        res.send({
            message: "Add Company Success!",
            company,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Add New Company! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.deleteByID = (req, res) => {
    const parameter = req.params.id
    company.destroy({
        where: {id:parameter}
    })
    .then(company => {
        res.send({
            message: "Company Deleted!",
            company,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Company Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    company.update({
        where: {id:parameter}
    })
    .then(company => {
        res.send({
            message: "Update Company Success!",
            company,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Company Failed!",
            err,
            error:false
        })
    })
}
