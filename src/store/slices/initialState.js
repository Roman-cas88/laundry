export const initialState = {
    users:[
        {
            id: 1,
            name: 'Roman',
            lastName: 'Orekhovskyi',
            roomNumber: '1404',
            email: 'orekhovskiy.roman@gmail.com',
            password: '12345678Qw',
        },
        {
            id: 2,
            name: 'Oleh',
            lastName: 'Drozd',
            roomNumber: '1302',
            email: 'drozd.oleh@gmail.com',
            password: '12Q345W6789erty'
        },
    ],
    reserve:[
        {
            roomNumber: '1404',
            date: '21/4/2023',
            time: '6:00'
          }, 
        {
            roomNumber: '1404',
            date: '21/4/2023',
            time: '7:00'
          }, 
        {
            roomNumber: '1302',
            date: '22/4/2023',
            time: '9:00'
          }, 
        {
            roomNumber: '1302',
            date: '22/4/2023',
            time: '10:00'
          }, 
    ]
}

