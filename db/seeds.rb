# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

testimonios = ["Llegamos con un amigo en su Renault Clio a recoger a dos amigas en la 138, arriba de la 19, a media noche. Mientras las esperábamos apareció un taxi con tres tipos. Dos se bajaron y nos apuntaron con un revólver. ", " Yo tenía una camioneta Mitsubishi Nativa nueva. Fui al Carulla de la 152 en Bogotá, como no llevaba efectivo me acerqué a uno de los cajeros dentro del supermercado. Una señora que estaba barriendo el piso me empujó. Detrás de mí había dos mujeres. Cuando salí y busqué las llaves en el bolsillo del saco no las encontré", "Mi caso es un robo a punta de papeles robados. Mi carro es un Optra 2004 que se utiliza para alquiler. Se le alquiló a un individuo y resultó que los papeles que presentó eran robados a un ciudadano chileno. Al cabo de dos meses no aparecía el carro ni había razón del tipo. Por tal motivo se pidió un certificado de tradición y efectivamente el carro ya estaba a nombre de otra persona, es decir que se hizo traspaso sin siquiera la intervención del verdadero dueño"," El sábado 19 de mayo estacioné mi Toyota Hilux 4x2 modelo 94 en la carrera 36 con calle 36, frente al Colegio Salesiano León XIII. Ingresé al colegio y me demoré 15 minutos; al regresar mi camioneta ya no estaba.","El año pasado, por el mes de febrero, paseaba con mi esposa que estaba embarazada. Al llegar a la calle Vélez y avenida Quito, al ponerse el semáforo en rojo y debido al tráfico de esa hora (17:00 aproximadamente) me detuve. En ese momento se acerca de mi lado esta señora dizque pidiendo caridad, se apega al vidrio del carro y empezó a golpear y a insultar pidiéndome el celular y la radio, del otro lado hacía lo mismo un hombre. ", "Una pareja  mayor de edad compuesta por un hombre de unos 60 años y una mujer  y según testimonios de la víctima , encañonaron su bebé  de un año y medio y le arrebataron el dinero que recién retiraba del cajero. También le robaron a su madre quien recién llegaba a la ciudad y tenía encima otros $1000,00.","Este hombre se acerca a los jóvenes, en especial a aquellos de grados superiores, de una manera amigable. Los saluda, les habla de profesores, de exalumnos y del colegio en general. En pocos minutos se gana la confianza de los menores, crea una relación de cercanía a tal nivel que los muchachos aceptan la invitación a tomarse una gaseosa y seguir la conversación en otro lugar."]
cities = ["Bogota", "Cartagena", "Barranquilla", "Medellin", "Cali", "Bucaramanga", "Chia", "Duitama"]

100.times do
    Complaint.create([{
        date_event: Faker::Date.between(600.days.ago, Date.today),
        latitude: Faker::Number.between(0.267064, 8.0306),
        longitude: Faker::Number.between(-77.216873, -68.0624),
        description: testimonios[rand(testimonios.size)],
        city: cities[rand(cities.size)]
    }])
end