let initialState = {
    tools: [
        {id:1, name:'Вечера на хуторе', price:'100',
            img:'https://i.ibb.co/HqDP3L1/1.jpg',
            desc:'Балалайка является русским народным струнным щипковым инструментом',
            hight:'700',
            width:'50',
            strings:'3',
            material:'корпуса - клен, уголков - груша',
            edging:'груша',
            manufacturer: 'Беларусь'
        },
        {id:2, name:'Морская глушь', price:'113',
            img:'https://i.ibb.co/CvzzDhF/2.jpg',
            desc:'Балалайка является русским народным струнным щипковым инструментом',
            hight:'700',
            width:'50',
            strings:'3',
            material:'корпуса - клен, уголков - груша',
            edging:'груша',
            manufacturer: 'Беларусь'
        },
        {id:3, name:'Пушкинский дуб', price:'97',
            img:'https://i.ibb.co/9ZhrmYB/3.jpg',
            desc:'Балалайка является русским народным струнным щипковым инструментом',
            hight:'700',
            width:'50',
            strings:'3',
            material:'корпуса - клен, уголков - груша',
            edging:'груша',
            manufacturer: 'Беларусь'
        },
        {id:4, name:'Русская зима', price:'117',
            img:'https://i.ibb.co/rGM3gYT/5.jpg',
            desc:'Балалайка является русским народным струнным щипковым инструментом',
            hight:'700',
            width:'50',
            strings:'3',
            material:'корпуса - клен, уголков - груша',
            edging:'груша',
            manufacturer: 'Беларусь'
        },

    ],
}

const DataReducer = (state = initialState, action) => {
    switch(action.type) {

    default: return state
    }
}

export default DataReducer