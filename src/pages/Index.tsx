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

  const subscriptionPlans = [
    {
      id: 1,
      name: "Pumpkin Client",
      duration: "1 месяц",
      price: 249,
      image: "/img/4f59c0e8-c88d-4e70-ab74-c402a70f06fd.jpg",
      description: "Полный доступ к Pumpkin Client на 1 месяц",
      features: ["Античит", "PvP модули", "Оптимизация", "Поддержка 24/7"],
      popular: false,
      savings: null,
    },
    {
      id: 2,
      name: "Pumpkin Client",
      duration: "6 месяцев",
      price: 475,
      originalPrice: 1494,
      image: "/img/4f1affdd-753f-4510-92ff-12d9f83099d0.jpg",
      description: "Лучшее предложение! Полный доступ на 6 месяцев",
      features: [
        "Античит",
        "PvP модули",
        "Оптимизация",
        "Поддержка 24/7",
        "Приоритетная поддержка",
      ],
      popular: true,
      savings: "Экономия 68%",
    },
    {
      id: 3,
      name: "Pumpkin Client",
      duration: "Навсегда",
      price: 649,
      originalPrice: 2988,
      image: "/img/4f59c0e8-c88d-4e70-ab74-c402a70f06fd.jpg",
      description: "Лайфтайм доступ к Pumpkin Client навсегда",
      features: [
        "Античит",
        "PvP модули",
        "Оптимизация",
        "Поддержка 24/7",
        "Приоритетная поддержка",
        "Бесплатные обновления",
      ],
      popular: false,
      savings: "Экономия 78%",
    },
  ];

  const addToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Pumpkin Client
                </h1>
                <p className="text-sm text-gray-600">
                  Премиум клиент для Minecraft
                </p>
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
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
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
            Премиум клиент{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Pumpkin Client
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Мощный и безопасный клиент для Minecraft от команды Nursultan.
            Полный набор PvP модулей, оптимизация и защита от читов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Купить сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Обзор клиента
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Тарифные планы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 relative ${
                  plan.popular ? "ring-2 ring-orange-500 shadow-orange-100" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 text-sm font-bold rounded-br-lg">
                    Популярно
                  </div>
                )}
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pt-6">
                  <div className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-lg font-semibold text-orange-600 mt-1">
                      {plan.duration}
                    </div>
                    <CardDescription className="mt-3">
                      {plan.description}
                    </CardDescription>
                  </div>
                  {plan.savings && (
                    <Badge
                      variant="secondary"
                      className="self-center mt-2 bg-green-100 text-green-800"
                    >
                      {plan.savings}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {plan.originalPrice}₽
                      </div>
                    )}
                    <div className="text-3xl font-bold text-orange-600">
                      {plan.price}₽
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => addToCart(plan.id)}
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                        : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800"
                    }`}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
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
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
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
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
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
              <h4 className="text-lg font-bold mb-4">Pumpkin Client</h4>
              <p className="text-gray-400">
                Премиум клиент для Minecraft от команды Nursultan
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Тарифы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    1 месяц
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    6 месяцев
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Навсегда
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
            <p>&copy; 2025 Pumpkin Client by Nursultan. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
