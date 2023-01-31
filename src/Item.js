// import React, { useState } from 'react';
// import games from './data';
// import { ethers } from 'ethers';
// import './nft-marketplace.json';

// const allCategories = ['all', ...new Set(games.map((game) => game.category))];
// console.log(allCategories);

// const Items = () => {
//   const contractABI = require('./nft-marketplace.json');
//   const YOUR_CONTRACT_ADDRESS = '0xB692fD2Cf5ddd28C459D68FF4503d41c8F297E59';
//   const [gamesList, setGamesList] = useState(games);
//   const [categories, setCategories] = useState(allCategories);
//   const [count, setCount] = useState(3);

//   let getContract = () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     let contract = new ethers.Contract(
//       YOUR_CONTRACT_ADDRESS,
//       contractABI,
//       signer
//     );
//     console.log(contract);
//     return contract;
//   };

//   let incrementCount = async (title, desc, price) => {
//     // setCount(count + 1);
//     await getContract().registerNft(title, desc, price);
//     const tx = await getContract().buy(count);
//     alert('Once block is mined, Value will be auto updated');
//     // await tx.wait();
//     // fetchCurrentValue();
//   };

//   const filterItems = (category) => {
//     if (category === 'all') {
//       setGamesList(games);
//     } else {
//       console.log(category);
//       const newItems = games.filter((game) => {
//         console.log(game.category);
//         return game.category === category;
//       });
//       console.log(newItems);
//       setGamesList(newItems);
//     }
//   };

//   let listenToEvent = async () => {
//     getContract().on('counterIncremented', async (sender, value, event) => {
//       // Called when anyone changes the value
//     });
//   };

//   return (
//     <>
//       <section className='buy-page'>
//         <div className='items-btn-container'>
//           <button className='btn btn-menu' onClick={() => filterItems('all')}>
//             All
//           </button>
//           <button
//             className='btn btn-menu'
//             onClick={() => filterItems('E-Sports')}
//           >
//             E Sports
//           </button>
//           <button
//             className='btn btn-menu'
//             onClick={() => filterItems('Racing')}
//           >
//             Racing
//           </button>
//         </div>
//         <div className='games-list'>
//           {/* {gamesList.map((game) => {
//             const { id, img, name, price, description } = game;
//             // return (
//             //   <div className='carddd'>
//             //     <div maxW='sm'>
//             //       <div>
//                     {/* <Heading size='md' color='white'>
//                       {name}
//                     </Heading>
//                     <Image
//                       className='card_img'
//                       src={img}
//                       alt=''
//                       borderRadius='lg'
//                     />
//                     <Stack mt='6' spacing='3'>
//                       <Heading size='md' color='white'>
//                         {name}
//                       </Heading>
//                       <Text color='white'>{description}</Text>
//                       <Text color='black' fontSize='2xl'>
//                         Price : {price} MATIC
//                       </Text>
//                     </Stack>
//                   </div>
//                   <CardFooter>
//                     <ButtonGroup spacing='2'>
//                       <Button
//                         variant='solid'
//                         colorScheme='green'
//                         onClick={() => incrementCount(name, description, price)}
//                       >
//                         Buy now
//                       </Button>
//                     </ButtonGroup>
//                   </CardFooter> */}
//           {/* </div>
//               </div>
//             );
//           })} */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Items;
