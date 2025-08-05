import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'divination',
      title: 'Гадания и предсказания',
      description: 'Раскрываю завесу будущего через древние искусства',
      price: 'от 3 000 ₽',
      icon: 'Eye',
      details: ['Таро', 'Руны', 'Хрустальный шар', 'Чтение ауры']
    },
    {
      id: 'rituals',
      title: 'Магические ритуалы',
      description: 'Мощные ритуалы для решения жизненных задач',
      price: 'от 5 000 ₽',
      icon: 'Flame',
      details: ['Привороты', 'Защитные ритуалы', 'Очищение', 'Снятие порчи']
    },
    {
      id: 'amulets',
      title: 'Амулеты и талисманы',
      description: 'Заряженные артефакты для защиты и удачи',
      price: 'от 2 000 ₽',
      icon: 'Shield',
      details: ['Защитные амулеты', 'Талисманы удачи', 'Любовные обереги', 'Денежные талисманы']
    },
    {
      id: 'consultation',
      title: 'Магические консультации',
      description: 'Персональные рекомендации по магической практике',
      price: 'от 1 500 ₽',
      icon: 'MessageCircle',
      details: ['Анализ ситуации', 'Подбор ритуалов', 'Духовное наставничество', 'Энергетическая диагностика']
    }
  ];

  const amulets = [
    {
      name: 'Пентаграмма защиты',
      description: 'Древний символ защиты от негативной энергии',
      price: '2 500 ₽',
      power: 'Защита'
    },
    {
      name: 'Лунный амулет',
      description: 'Усиливает интуицию и женскую энергию',
      price: '3 200 ₽',
      power: 'Интуиция'
    },
    {
      name: 'Рунический оберег',
      description: 'Привлекает удачу и благополучие',
      price: '2 800 ₽',
      power: 'Удача'
    },
    {
      name: 'Кристалл силы',
      description: 'Аметист для духовной защиты и очищения',
      price: '4 000 ₽',
      power: 'Очищение'
    }
  ];

  const testimonials = [
    {
      name: 'Елена М.',
      text: 'Невероятно точные предсказания! Все сбылось именно так, как было сказано.',
      rating: 5,
      service: 'Гадание на картах Таро'
    },
    {
      name: 'Дмитрий К.',
      text: 'Ритуал защиты помог решить серьезные проблемы. Спасибо за профессионализм!',
      rating: 5,
      service: 'Защитный ритуал'
    },
    {
      name: 'Анна С.',
      text: 'Амулет действительно работает! Жизнь изменилась к лучшему.',
      rating: 5,
      service: 'Талисман удачи'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-mystic-deep to-mystic-dark font-open-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-mystic-deep/80 border-b border-mystic-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-cormorant font-bold text-mystic-gold">
              🔮 Темная Магия
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-mystic-light hover:text-mystic-gold transition-colors">Услуги</a>
              <a href="#amulets" className="text-mystic-light hover:text-mystic-gold transition-colors">Амулеты</a>
              <a href="#about" className="text-mystic-light hover:text-mystic-gold transition-colors">Обо мне</a>
              <a href="#reviews" className="text-mystic-light hover:text-mystic-gold transition-colors">Отзывы</a>
              <a href="#contact" className="text-mystic-light hover:text-mystic-gold transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden" variant="ghost">
              <Icon name="Menu" className="text-mystic-gold" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-deep/90 to-mystic-purple/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/img/ca8e69c5-c1b0-4d28-84a0-2d3328233d25.jpg)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-cormorant font-bold text-mystic-gold mb-6 animate-fade-in">
              Добро пожаловать в мир
              <span className="block text-mystic-light">Темной Магии</span>
            </h2>
            <p className="text-xl text-mystic-light/90 mb-8 animate-fade-in">
              Раскрываю тайны будущего, провожу древние ритуалы и создаю мощные амулеты. 
              Более 15 лет практики в искусстве черной магии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-mystic-gold text-mystic-deep hover:bg-mystic-gold/90 font-semibold px-8 py-4 text-lg animate-glow"
              >
                <Icon name="Sparkles" className="mr-2" />
                Заказать консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-mystic-gold text-mystic-gold hover:bg-mystic-gold hover:text-mystic-deep px-8 py-4 text-lg"
              >
                <Icon name="Eye" className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-mystic-purple/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-cormorant font-bold text-mystic-gold mb-4">
              Магические услуги
            </h3>
            <p className="text-mystic-light/80 max-w-2xl mx-auto">
              Предлагаю полный спектр магических услуг для решения любых жизненных задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className="bg-mystic-dark/50 border-mystic-gold/30 hover:border-mystic-gold/60 transition-all duration-300 hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedService(service.id)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-mystic-gold/20 flex items-center justify-center group-hover:bg-mystic-gold/30 transition-colors">
                    <Icon name={service.icon} size={32} className="text-mystic-gold" />
                  </div>
                  <CardTitle className="text-mystic-gold font-cormorant text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-mystic-light/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-mystic-gold mb-4">
                    {service.price}
                  </div>
                  <div className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <Badge key={idx} variant="outline" className="border-mystic-gold/50 text-mystic-light text-xs">
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amulets Catalog */}
      <section id="amulets" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-cormorant font-bold text-mystic-gold mb-4">
              Каталог амулетов и талисманов
            </h3>
            <p className="text-mystic-light/80 max-w-2xl mx-auto">
              Каждый амулет изготавливается вручную и заряжается особыми ритуалами
            </p>
          </div>

          <div className="relative mb-12">
            <div 
              className="h-64 bg-cover bg-center rounded-lg overflow-hidden"
              style={{ backgroundImage: 'url(/img/0f1c0e54-7257-4e95-bb89-af1d2f023e72.jpg)' }}
            >
              <div className="h-full bg-mystic-deep/60 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-3xl font-cormorant font-bold text-mystic-gold mb-2">
                    Магические артефакты
                  </h4>
                  <p className="text-mystic-light">Источники древней силы</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amulets.map((amulet, index) => (
              <Card key={index} className="bg-mystic-dark/50 border-mystic-gold/30 hover:border-mystic-gold/60 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-mystic-gold font-cormorant text-lg">
                      {amulet.name}
                    </CardTitle>
                    <Badge className="bg-mystic-gold/20 text-mystic-gold border-mystic-gold/50">
                      {amulet.power}
                    </Badge>
                  </div>
                  <CardDescription className="text-mystic-light/70">
                    {amulet.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-mystic-gold">
                      {amulet.price}
                    </span>
                    <Button size="sm" className="bg-mystic-gold text-mystic-deep hover:bg-mystic-gold/90">
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-mystic-purple/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-cormorant font-bold text-mystic-gold mb-6">
                Обо мне
              </h3>
              <div className="space-y-4 text-mystic-light/90">
                <p>
                  Меня зовут Валерия, и я практикую темную магию уже более 15 лет. 
                  Мой путь начался с изучения древних традиций и ритуалов, 
                  переданных через поколения мастеров.
                </p>
                <p>
                  Специализируюсь на гаданиях, защитных ритуалах и создании 
                  мощных амулетов. Каждая работа выполняется индивидуально, 
                  с учетом личной энергетики клиента.
                </p>
                <p>
                  Мои услуги помогли сотням людей найти ответы на важные вопросы, 
                  защититься от негативного воздействия и изменить свою судьбу к лучшему.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-mystic-gold">15+</div>
                  <div className="text-sm text-mystic-light/70">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mystic-gold">500+</div>
                  <div className="text-sm text-mystic-light/70">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mystic-gold">24/7</div>
                  <div className="text-sm text-mystic-light/70">поддержка</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div 
                className="h-96 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: 'url(/img/de7cc5d5-0e8d-4ff9-b02c-583cfc38d5c1.jpg)' }}
              >
                <div className="h-full bg-gradient-to-t from-mystic-deep/80 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-cormorant font-bold text-mystic-gold mb-4">
              Отзывы клиентов
            </h3>
            <p className="text-mystic-light/80 max-w-2xl mx-auto">
              Реальные истории людей, чья жизнь изменилась благодаря магии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-mystic-dark/50 border-mystic-gold/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-mystic-gold font-cormorant">
                      {testimonial.name}
                    </CardTitle>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-mystic-gold fill-current" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="border-mystic-gold/50 text-mystic-light text-xs w-fit">
                    {testimonial.service}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-mystic-light/80 italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-mystic-purple/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-cormorant font-bold text-mystic-gold mb-4">
              Цены на услуги
            </h3>
          </div>

          <Tabs defaultValue="divination" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-mystic-dark/50">
              <TabsTrigger value="divination" className="data-[state=active]:bg-mystic-gold data-[state=active]:text-mystic-deep">
                Гадания
              </TabsTrigger>
              <TabsTrigger value="rituals" className="data-[state=active]:bg-mystic-gold data-[state=active]:text-mystic-deep">
                Ритуалы
              </TabsTrigger>
              <TabsTrigger value="amulets" className="data-[state=active]:bg-mystic-gold data-[state=active]:text-mystic-deep">
                Амулеты
              </TabsTrigger>
              <TabsTrigger value="consultation" className="data-[state=active]:bg-mystic-gold data-[state=active]:text-mystic-deep">
                Консультации
              </TabsTrigger>
            </TabsList>

            <TabsContent value="divination" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/30">
                  <h4 className="text-mystic-gold font-cormorant text-xl mb-2">Таро расклад</h4>
                  <p className="text-mystic-light/70 mb-4">Классическое гадание на картах Таро</p>
                  <div className="text-2xl font-bold text-mystic-gold">3 000 ₽</div>
                </div>
                <div className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/30">
                  <h4 className="text-mystic-gold font-cormorant text-xl mb-2">Рунический расклад</h4>
                  <p className="text-mystic-light/70 mb-4">Древние руны раскроют ваше будущее</p>
                  <div className="text-2xl font-bold text-mystic-gold">3 500 ₽</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rituals" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/30">
                  <h4 className="text-mystic-gold font-cormorant text-xl mb-2">Защитный ритуал</h4>
                  <p className="text-mystic-light/70 mb-4">Создание мощной защиты от негатива</p>
                  <div className="text-2xl font-bold text-mystic-gold">5 000 ₽</div>
                </div>
                <div className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/30">
                  <h4 className="text-mystic-gold font-cormorant text-xl mb-2">Приворотный ритуал</h4>
                  <p className="text-mystic-light/70 mb-4">Привлечение любви и страсти</p>
                  <div className="text-2xl font-bold text-mystic-gold">7 000 ₽</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="amulets" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amulets.slice(0, 2).map((amulet, index) => (
                  <div key={index} className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/30">
                    <h4 className="text-mystic-gold font-cormorant text-xl mb-2">{amulet.name}</h4>
                    <p className="text-mystic-light/70 mb-4">{amulet.description}</p>
                    <div className="text-2xl font-bold text-mystic-gold">{amulet.price}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="consultation" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/30">
                  <h4 className="text-mystic-gold font-cormorant text-xl mb-2">Базовая консультация</h4>
                  <p className="text-mystic-light/70 mb-4">30 минут личной беседы</p>
                  <div className="text-2xl font-bold text-mystic-gold">1 500 ₽</div>
                </div>
                <div className="bg-mystic-dark/50 p-6 rounded-lg border border-mystic-gold/30">
                  <h4 className="text-mystic-gold font-cormorant text-xl mb-2">Расширенная консультация</h4>
                  <p className="text-mystic-light/70 mb-4">60 минут + персональные рекомендации</p>
                  <div className="text-2xl font-bold text-mystic-gold">2 500 ₽</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-cormorant font-bold text-mystic-gold mb-4">
              Часто задаваемые вопросы
            </h3>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-mystic-gold/30">
              <AccordionTrigger className="text-mystic-light hover:text-mystic-gold">
                Как долго длится магический ритуал?
              </AccordionTrigger>
              <AccordionContent className="text-mystic-light/80">
                Время проведения ритуала зависит от его сложности. Простые ритуалы занимают 1-2 часа, 
                сложные многоступенчатые ритуалы могут длиться несколько дней.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-mystic-gold/30">
              <AccordionTrigger className="text-mystic-light hover:text-mystic-gold">
                Безопасна ли черная магия?
              </AccordionTrigger>
              <AccordionContent className="text-mystic-light/80">
                При правильном подходе и соблюдении всех мер предосторожности магические практики безопасны. 
                Я использую только проверенные методы с многолетним опытом.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-mystic-gold/30">
              <AccordionTrigger className="text-mystic-light hover:text-mystic-gold">
                Как быстро проявляется результат?
              </AccordionTrigger>
              <AccordionContent className="text-mystic-light/80">
                Результаты могут проявляться от нескольких дней до нескольких месяцев, 
                в зависимости от сложности запроса и энергетических особенностей ситуации.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-mystic-gold/30">
              <AccordionTrigger className="text-mystic-light hover:text-mystic-gold">
                Можно ли заказать услуги дистанционно?
              </AccordionTrigger>
              <AccordionContent className="text-mystic-light/80">
                Да, многие ритуалы и гадания можно проводить дистанционно. 
                Для этого потребуется ваша фотография и точная информация о ситуации.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-mystic-purple/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-cormorant font-bold text-mystic-gold mb-4">
              Связаться со мной
            </h3>
            <p className="text-mystic-light/80 max-w-2xl mx-auto">
              Готова помочь вам в решении любых жизненных вопросов через древнюю мудрость магии
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mystic-gold/20 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-mystic-gold" />
                </div>
                <div>
                  <h4 className="text-mystic-gold font-cormorant text-lg">Телефон</h4>
                  <p className="text-mystic-light/80">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mystic-gold/20 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="text-mystic-gold" />
                </div>
                <div>
                  <h4 className="text-mystic-gold font-cormorant text-lg">Email</h4>
                  <p className="text-mystic-light/80">magic@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mystic-gold/20 rounded-full flex items-center justify-center">
                  <Icon name="MessageSquare" className="text-mystic-gold" />
                </div>
                <div>
                  <h4 className="text-mystic-gold font-cormorant text-lg">Telegram</h4>
                  <p className="text-mystic-light/80">@dark_magic_master</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mystic-gold/20 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-mystic-gold" />
                </div>
                <div>
                  <h4 className="text-mystic-gold font-cormorant text-lg">Время работы</h4>
                  <p className="text-mystic-light/80">Ежедневно с 20:00 до 06:00</p>
                </div>
              </div>
            </div>

            <Card className="bg-mystic-dark/50 border-mystic-gold/30">
              <CardHeader>
                <CardTitle className="text-mystic-gold font-cormorant text-2xl">
                  Заказать консультацию
                </CardTitle>
                <CardDescription className="text-mystic-light/70">
                  Опишите вашу ситуацию, и я подберу подходящий ритуал
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-mystic-light text-sm mb-2 block">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full bg-mystic-purple/30 border border-mystic-gold/30 rounded-md px-4 py-2 text-mystic-light focus:border-mystic-gold focus:outline-none"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="text-mystic-light text-sm mb-2 block">Контакты</label>
                  <input 
                    type="text" 
                    className="w-full bg-mystic-purple/30 border border-mystic-gold/30 rounded-md px-4 py-2 text-mystic-light focus:border-mystic-gold focus:outline-none"
                    placeholder="Телефон или Telegram"
                  />
                </div>
                <div>
                  <label className="text-mystic-light text-sm mb-2 block">Описание ситуации</label>
                  <textarea 
                    className="w-full bg-mystic-purple/30 border border-mystic-gold/30 rounded-md px-4 py-2 text-mystic-light focus:border-mystic-gold focus:outline-none h-32 resize-none"
                    placeholder="Расскажите о вашей ситуации..."
                  />
                </div>
                <Button className="w-full bg-mystic-gold text-mystic-deep hover:bg-mystic-gold/90 font-semibold">
                  <Icon name="Send" className="mr-2" />
                  Отправить запрос
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-mystic-gold/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-mystic-light/60">
            © 2024 Темная Магия. Все права защищены древними заклинаниями.
          </p>
          <p className="text-mystic-light/40 text-sm mt-2">
            Результаты магических практик индивидуальны и не гарантированы
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;