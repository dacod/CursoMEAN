const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe o nome do crédito!'] },
  value: { type: Number, in: 0, required: [true, 'Informe o valor do crédito!'] }
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe o nome do debito!'] },
  value: { type: Number, min: 0, required: [true, 'Informe o valor do debito!'] },
  status: { type: String, required: false, uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe uma descrição para o registro!'] },
  month: { type: Number, min: 1, max: 12, required: [true, 'Informe o mês do registro!'] },
  year: { type: Number, min: 1970, max: 2100, required: [true, 'Informe o ano do registro!'] },
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
