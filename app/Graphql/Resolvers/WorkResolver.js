'use strict';

const Work = use('App/Models/Work');

class WorkResolver {

    async getWorks(root, { page = 1, like }, { request }) {
        let works = Work.query();
        // filtrar
        if (like) works.where('persona_id', 'like', `%${like}%`);
        // obtener relaciones
        works = await works.paginate(page, 20);
        // obtener JSON
        return works.toJSON();
    }


    async createWork(root, { input }, { request }) {
        try {
            // variables
            let { meta_id, planilla_id, cargo_id, categoria_id } = input;
            // crear trabajador
            await Work.create(input);
            return { success: true, code: "201", message: "El registro se guardo correctamente!" };
        } catch (error) {
            return { success: false, code: "501", message: error.message };
        }
    }

}

module.exports = new WorkResolver;