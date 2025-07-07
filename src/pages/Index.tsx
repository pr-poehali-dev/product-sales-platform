import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "OptiFine HD",
      price: 299,
      image: "/img/4f59c0e8-c88d-4e70-ab74-c402a70f06fd.jpg",
      description: "Улучшенная графика и производительность",
      category: "Модификация",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Lunar Client",
      price: 499,
      image: "/img/4f1affdd-753f-4510-92ff-12d9f83099d0.jpg",
      description: "Профессиональный клиент для PvP",
      category: "Клиент",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Forge Client Pro",
      price: 399,
      image: "/img/4f59c0e8-c88d-4e70-ab74-c402a70f06fd.jpg",
      description: "Мощный клиент с поддержкой модов",
      category: "Клиент",
      rating: 4.7,
    },
  ];

  const addToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  MinecraftShop
                </h1>
                <p className="text-sm text-gray-600">Лучшие клиенты для игры</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="relative"
                onClick={() => {}}
              >
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button
                onClick={() => setIsAuthOpen(!isAuthOpen)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                <Icon name="User" size={20} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Премиум клиенты для
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Minecraft
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Улучши свой игровой опыт с нашими профессиональными клиентами.
            Больше FPS, лучшая графика, продвинутые возможности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-4"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-purple-500 text-purple-600 hover:bg-purple-50"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Популярные клиенты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription className="mt-2">
                        {product.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">
                      {product.price}₽
                    </span>
                    <Button
                      onClick={() => addToCart(product.id)}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      {isAuthOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Авторизация</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAuthOpen(false)}
              >
                <Icon name="X" size={20} />
              </Button>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input id="password" type="password" />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Войти
                </Button>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-reg">Email</Label>
                  <Input
                    id="email-reg"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-reg">Пароль</Label>
                  <Input id="password-reg" type="password" />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Зарегистрироваться
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">MinecraftShop</h4>
              <p className="text-gray-400">
                Лучшие клиенты и модификации для Minecraft
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Клиенты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Модификации
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Скины
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Аккаунт</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Профиль
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Заказы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Избранное
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MinecraftShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
