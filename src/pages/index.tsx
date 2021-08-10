import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import hourIcon from '../../public/images/icon-hour.png'
import logoImg from '../../public/images/logo.svg'
import Card from '../components/Card'
import InfoCard from '../components/InfoCard'
import RadioBox from '../components/RadioBox'
import api from '../services/api'
import * as S from '../styles/home/styles'

interface Schedules {
  weekdays: string;
  hour: string;
}

export interface Gym {
    id: string;
    content: string;
    fountain: string;
    locker_room: string;
    mask: string;
    opened: boolean;
    schedules: Schedules[];
    title: string;
    towel: string;
}

export default function Home() {
  const [gyms, setGyms] = useState<Gym[]>([]);


  useEffect(() => {
      try {
        api.get('/locations.json')
          .then(response => {
            setGyms(response.data.locations);
          }) 
      } catch (error) {
        console.log('error',error);
      }
    },
    [],
  )

  console.log('gyms',gyms);


  return (
    <div>
      <Head>
        <title>Smart Fit</title>
      </Head>

      <main>
        <S.Navbar>
          <Image src={logoImg} alt="Smart fit" width={188} height={70}/>
        </S.Navbar>

        <S.Content>
          <h1>REABERTURA SMART FIT</h1>

          <S.Line/>

          <S.InfoText>
            O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. 
            Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
          </S.InfoText>

          <S.ConfigurationCard>
            <S.TitleConfigurationCard>
              <Image src={hourIcon} alt="hour" width={30} height={30}/>

              <p>Horário</p>
            </S.TitleConfigurationCard>

            <h2>Qual período quer treinar?</h2>

            <S.SeparatorLine />

            <RadioBox />
            
            <S.CheckAndResultContainer>
              <S.CheckArea>
                <input type="checkbox" id="closed" name="closed"/>
                <p>Exibir unidades fechadas</p>
              </S.CheckArea>

              <S.ResultsFound>
                <p>Resultados encontrados: <em>0</em></p>
              </S.ResultsFound>
            </S.CheckAndResultContainer>

            <S.ActionArea>
              <S.Button>
                Encontrar unidade
              </S.Button>

              <S.Button outlined>
                Limpar
              </S.Button>
            </S.ActionArea>
            
          </S.ConfigurationCard>
          
          <InfoCard/>

          <S.GridLayout>
              {
                gyms.map((gym, index) => {
                  return (
                    <div key={index}>
                      <Card key={index} gym={gym} />
                    </div>
                  )
                })
              }

          </S.GridLayout>
          

        </S.Content>
      </main>

      <S.Footer>
        <Image src={logoImg} alt="Smart fit"/>
        <p>Todos os direitos reservados - 2020</p>
      </S.Footer>
    </div>
  )
}
