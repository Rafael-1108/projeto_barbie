import dados from "../models/dados.js";

const { barbies } = dados;

let resultado = barbies;

const getAllBarbies = (req, res) => {
    res.status(200).json({
        total: resultado.length,
        barbies: resultado
    })
};

const getBarbieById = (req, res) => {
    const id = parseInt(req.params.id);

    const barbie = barbies.find(b => b.id === id);

    res.status(200).json({
        total: barbies.length,
        barbie: barbie
    })
}

const createBarbie = (req, res) => {
    const { id, nome, profissao, anoLancamento } = req.body;

    if (!nome) {
        return res.status(400).json({
            sucess: false,
            message: "Nome é obrigatório"
        });
    }

    const novaBarbie = {
        id: barbies.length + 1,
        nome: nome,
        anoLancamento: anoLancamento,
        profissao: profissao
    }

    barbies.push(novaBarbie);

    res.status(201).json ({
        sucess: true,
        message: "Barbie cadastrada",
        barbie: novaBarbie
    })
}

const deleteBarbie = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            sucess: false,
            message: "O ID deve ser válido"
        })
    }

    const barbieParaRemover = barbies.find(b => b.id === id);

    if (!barbieParaRemover) {
        return res.status(404).json ({
            sucess: false,
            message: `Nenhuma barbie com o id: ${id} encontrada`
        });
    }

    const barbiesFiltradas = barbies.filter(barbie => barbie.id !== id);

    barbies.splice(0, barbies.length, ...barbiesFiltradas);

    res.status(200).json({
        sucess: true,
        message: `A barbie ${id} foi removida com sucesso`
    })
} 

export { getAllBarbies, getBarbieById, createBarbie, deleteBarbie };