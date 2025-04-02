import { Box, Button, Dialog, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import CarrinhoItem from '../CarrinhoItem';
import { formattedCurrency } from '../../entities/AllUseFunctions';
import { useCart } from '../../contexts/CartContext';
import { CartButton, ThemeCart } from './style';

const Carrinho: React.FC = () => {
  const { data, handleFinishOrder, handleTotalCartOrder } = useCart();

  return (
    <ThemeCart accentColor="red" radius="full" appearance="inherit">
      <Dialog.Root>
        <Dialog.Trigger>
          <CartButton variant="soft">
            <FaOpencart className="text-3xl text-white" />
          </CartButton>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: '600px', padding: '24px' }}>
          <Box>
            <Flex justify="between" align="center" mb="4">
              <Dialog.Title>
                <Text size="6" weight="bold">
                  🛒 Seu Carrinho
                </Text>
              </Dialog.Title>

              <Dialog.Close>
                <Button variant="ghost" size="2" radius="full">
                  <IoClose className="text-2xl" />
                </Button>
              </Dialog.Close>
            </Flex>
            <Dialog.Description>
              <Text size="3" color="gray">
                Aqui estão os itens que você adicionou ao seu carrinho.
              </Text>
            </Dialog.Description>

            {data.map(item => (
              <CarrinhoItem key={item.id} prop={item} />
            ))}

            <Flex justify="between" align="center" mt="4">
              <Text size="5" weight="bold">
                Total:
              </Text>
              <Text size="5" weight="bold" color="red">
                {formattedCurrency(handleTotalCartOrder())}
              </Text>
            </Flex>
            <Flex justify="end" mt="8">
              <Button
                variant="solid"
                size="4"
                radius="large"
                onClick={handleFinishOrder}
              >
                Finalizar Compra
              </Button>
            </Flex>
          </Box>
        </Dialog.Content>
      </Dialog.Root>
    </ThemeCart>
  );
};

export default Carrinho;
