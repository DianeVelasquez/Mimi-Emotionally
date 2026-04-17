import React, { useRef, useState } from 'react';
import { Typography, Box, Button, Divider } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const SamplePage = () => {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    inputRef.current?.click(); // Simula clic en input file oculto
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio')) {
      setSelectedFile(file);
    } else {
      alert('Por favor selecciona un archivo de audio válido.');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/upload-audio', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert('🎉 ¡Archivo cargado y procesado con éxito!');
        console.log('Respuesta del backend:', data);
      } else {
        alert(`❌ Error del servidor: ${data.error}`);
      }
    } catch (error) {
      alert(`❌ Fallo en la conexión con el backend: ${error.message}`);
    }
  };

  return (
    <PageContainer title="Vincula tu música" description="Carga tu música para analizarla">
      <DashboardCard title="Vincula tu música">
        <Typography variant="h6" mb={4}>
          <p>Aquí podrás transformar tu vida a través de lo que escuchas ♪.</p>
          <p>Sube tu archivo de audio.</p>
        </Typography>

        {/* Sección para subir archivo */}
        <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2} mb={4}>
          <Button
            variant="contained"
            color="success"
            onClick={handleButtonClick}
          >
            Subir archivo de audio ⬆️
          </Button>

          <input
            type="file"
            accept="audio/*"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />

          {selectedFile && (
            <>
              <Typography variant="body1" color="success.main">
                Archivo seleccionado: {selectedFile.name}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleUpload}
              >
                Enviar al análisis 🎵
              </Button>
            </>
          )}
        </Box>

        <Divider />

        {/* Sección de Spotify */}
        <Box mt={4} display="flex" alignItems="center" gap={2}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify logo"
            style={{ height: 40 }}
          />
          <Typography variant="subtitle1" color="textSecondary">
            Próximamente para Spotify
          </Typography>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

