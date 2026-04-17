import React, { useEffect, useState } from 'react'
import { Grid, Typography, CardContent, Button, CardMedia } from '@mui/material'
import BlankCard from '../../../components/shared/BlankCard'
import img1 from 'src/assets/images/products/u1.jpg'
import img2 from 'src/assets/images/products/u2.gif'
import img3 from 'src/assets/images/products/u3.jpg'
import img4 from 'src/assets/images/products/u4.jpg'
import img5 from 'src/assets/images/products/u5.jpg'

const emotionCards = {
  Happy: {
    title: 'Happy!',
    subtitle: '🎶 ¡Hola! Notamos que estás escuchando música alegre. ¿Quieres compartir qué canción te levantó el ánimo hoy? 😄',
    photo: img1,
    btncolor: 'success',
    href: 'https://flexy-react-main.netlify.app/frontend-pages/blog/',
  },
  Relax: {
    title: 'Relax - Sad!',
    subtitle: '🎶 ¡Hola! Notamos que estás escuchando música con connotaciones de baja frecuencia y tonos graves. ¿Quieres compartir si te sientes tranquilo? ó \¿Te gustaría contarnos si todo está bien o si necesitas hablar con alguien? 😌😟' ,
    photo: img4,
    btncolor: 'success',
    href: 'https://flexy-react-main.netlify.app/apps/notes',
  },
  Angry: {
    title: 'Angry!',
    subtitle: '😡 Hola, notamos que tu música refleja un estado de ánimo molesto. Aquí tienes algunas actividades que te podrían ayudar',
    photo: img5,
    btncolor: 'error',
    href: 'https://play.google.com/store/apps/details?id=com.google.android.apps.tasks&hl=es_CO',
  },
  Sad: {
    title: 'Sad - Relax!',
    subtitle: '😟 Hola, notamos que tu música refleja un estado de ánimo triste. ¿Te gustaría contarnos si todo está bien o si necesitas hablar con alguien?',
    photo: img3,
    btncolor: 'error',
    href: 'https://open.spotify.com/playlist/5xXpUY3henFlcPt86jJrqh?si=3381489ce8b2496a&nd=1&dlsi=257e105713f04674',
  },
}

const fixedCard = {
  title: '¿Deseas hablar?',
  subtitle: '🧠 Si quieres conversar con un profesional, aquí puedes agendar una sesión con tu psicólogo de confianza. Tu bienestar es importante. 💬',
  photo: img2,
  btncolor: 'warning',
  href: 'https://flexy-react-main.netlify.app/apps/calendar',
}

const Blog = () => {
  const [emotion, setEmotion] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_last_prediction')
      .then((res) => res.json())
      .then((data) => setEmotion(data.emotion))
      .catch((error) => console.error('Error fetching emotion:', error))
  }, [])

  const cardsToShow = []

  if (emotion && emotionCards[emotion]) {
    cardsToShow.push(emotionCards[emotion])
  }

  cardsToShow.push(fixedCard) // Siempre muestra esta

  return (
    <Grid container spacing={3}>
      {cardsToShow.map((product, index) => (
        <Grid item sm={12} md={6} key={index}>
          <BlankCard>
            <CardMedia
              component="img"
              image={product.photo}
              alt={product.title}
              sx={{
                height: 160,
                width: '100%',
                objectFit: 'contain',
                padding: 2,
              }}
            />
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h5" fontWeight={500} mb={1}>
                {product.title}
              </Typography>
              <Typography variant="subtitle1" mb={2}>
                {product.subtitle}
              </Typography>
              <Button
                variant="contained"
                color={product.btncolor}
                component="a"
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click aquí
              </Button>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  )
}

export default Blog
