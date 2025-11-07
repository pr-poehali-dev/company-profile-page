import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Index() {
  const [viewMode, setViewMode] = useState<'admin' | 'user'>('admin');

  const companyData = {
    name: 'ООО "ТехноСтрой"',
    inn: '7734567890',
    kpp: '773401001',
    ogrn: '1157746123456',
    address: 'г. Москва, ул. Ленина, д. 1, офис 100',
    director: 'Иванов Иван Иванович',
    email: 'info@tehnostroy.ru',
    phone: '+7 (495) 123-45-67',
    registrationDate: '15.03.2015',
    status: 'Активна',
  };

  const currentPlan = {
    name: 'Бизнес',
    price: '15 000 ₽/мес',
    startDate: '01.11.2025',
    endDate: '01.12.2025',
    documentsUsed: 500,
    documentsTotal: 1000,
    usersUsed: 12,
    usersTotal: 50,
    storageUsed: 45,
    storageTotal: 100,
  };

  const planHistory = [
    { plan: 'Бизнес', period: '01.11.2025 - 01.12.2025', status: 'Активен' },
    { plan: 'Стандарт', period: '01.09.2025 - 01.11.2025', status: 'Завершён' },
    { plan: 'Стандарт', period: '01.07.2025 - 01.09.2025', status: 'Завершён' },
  ];

  const certificates = [
    { owner: 'Иванов И.И.', validUntil: '15.06.2026', issuer: 'АО "КАЛУГА АСТРАЛ"', status: 'Действует' },
    { owner: 'Петров П.П.', validUntil: '22.08.2026', issuer: 'ООО "КРИПТО-ПРО"', status: 'Действует' },
    { owner: 'Сидорова А.М.', validUntil: '10.12.2025', issuer: 'АО "КАЛУГА АСТРАЛ"', status: 'Истекает' },
  ];

  const employees = [
    { name: 'Петров Пётр Петрович', role: 'Главный бухгалтер', email: 'petrov@tehnostroy.ru', status: 'Активен' },
    { name: 'Сидорова Анна Михайловна', role: 'Юрист', email: 'sidorova@tehnostroy.ru', status: 'Активен' },
    { name: 'Козлов Дмитрий Викторович', role: 'Менеджер', email: 'kozlov@tehnostroy.ru', status: 'Активен' },
    { name: 'Смирнов Алексей Иванович', role: 'Бухгалтер', email: 'smirnov@tehnostroy.ru', status: 'Активен' },
  ];

  const payments = [
    { date: '01.11.2025', amount: '15 000 ₽', plan: 'Бизнес', status: 'Оплачен' },
    { date: '01.10.2025', amount: '10 000 ₽', plan: 'Стандарт', status: 'Оплачен' },
    { date: '01.09.2025', amount: '10 000 ₽', plan: 'Стандарт', status: 'Оплачен' },
  ];

  const handleDownload = (section?: string) => {
    console.log(`Скачивание данных: ${section || 'все разделы'}`);
  };

  const sidebarItems = [
    { icon: 'Home', label: 'Главная' },
    { icon: 'FileText', label: 'Документы' },
    { icon: 'Building2', label: 'Компания', active: true },
    { icon: 'Users', label: 'Сотрудники' },
    { icon: 'Settings', label: 'Настройки' },
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex overflow-hidden">
      {viewMode === 'user' && (
        <div className="w-[210px] bg-white/40 backdrop-blur-md border-r border-white/60 flex-shrink-0">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
              <div className="font-bold text-sm">ЭДО Система</div>
            </div>
            <nav className="space-y-1">
              {sidebarItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    item.active
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-white/60'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className={`flex-1 ${viewMode === 'user' ? 'pl-20 pr-20' : 'px-20'} py-6 overflow-hidden`}>
        <div className="h-full flex flex-col max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6 flex-shrink-0">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {companyData.name}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Профиль компании в системе ЭДО</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-2xl shadow-lg">
                <Button
                  variant={viewMode === 'admin' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('admin')}
                  className={viewMode === 'admin' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : ''}
                >
                  <Icon name="Shield" size={16} className="mr-2" />
                  Админ
                </Button>
                <Button
                  variant={viewMode === 'user' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('user')}
                  className={viewMode === 'user' ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' : ''}
                >
                  <Icon name="Eye" size={16} className="mr-2" />
                  Пользователь
                </Button>
              </div>

              {viewMode === 'admin' && (
                <Button
                  onClick={() => handleDownload()}
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg"
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать всё
                </Button>
              )}
            </div>
          </div>

          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Общая информация
                      </h2>
                      {viewMode === 'admin' && (
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleDownload('general')}>
                            <Icon name="Download" size={14} />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Icon name="Edit" size={14} />
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Статус</span>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                          {companyData.status}
                        </Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ИНН</span>
                        <span className="font-semibold">{companyData.inn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">КПП</span>
                        <span className="font-semibold">{companyData.kpp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ОГРН</span>
                        <span className="font-semibold">{companyData.ogrn}</span>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-muted-foreground mb-1">Адрес</div>
                        <div className="font-semibold text-xs leading-relaxed">{companyData.address}</div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Директор</span>
                        <span className="font-semibold">{companyData.director}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email</span>
                        <span className="font-semibold">{companyData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Телефон</span>
                        <span className="font-semibold">{companyData.phone}</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Текущий тариф
                      </h2>
                      {viewMode === 'admin' && (
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleDownload('plan')}>
                          <Icon name="Download" size={14} />
                        </Button>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{currentPlan.name}</div>
                          <div className="text-sm text-muted-foreground">{currentPlan.price}</div>
                        </div>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1">
                          Активен
                        </Badge>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        {currentPlan.startDate} - {currentPlan.endDate}
                      </div>

                      <Separator />

                      <div className="space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Документы</span>
                            <span className="font-semibold">{currentPlan.documentsUsed} / {currentPlan.documentsTotal}</span>
                          </div>
                          <Progress value={(currentPlan.documentsUsed / currentPlan.documentsTotal) * 100} className="h-1.5" />
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Пользователи</span>
                            <span className="font-semibold">{currentPlan.usersUsed} / {currentPlan.usersTotal}</span>
                          </div>
                          <Progress value={(currentPlan.usersUsed / currentPlan.usersTotal) * 100} className="h-1.5" />
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Хранилище</span>
                            <span className="font-semibold">{currentPlan.storageUsed} / {currentPlan.storageTotal} ГБ</span>
                          </div>
                          <Progress value={(currentPlan.storageUsed / currentPlan.storageTotal) * 100} className="h-1.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {viewMode === 'admin' ? 'Сотрудники' : 'Коллеги'}
                      </h2>
                      {viewMode === 'admin' && (
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleDownload('employees')}>
                          <Icon name="Download" size={14} />
                        </Button>
                      )}
                    </div>

                    <ScrollArea className="h-[240px]">
                      <div className="space-y-2 pr-4">
                        {employees.map((emp, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50/50 to-pink-50/50 hover:from-purple-50 hover:to-pink-50 transition-all"
                          >
                            <Avatar className="h-10 w-10 border-2 border-purple-200 flex-shrink-0">
                              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white font-semibold text-xs">
                                {emp.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm truncate">{emp.name}</div>
                              <div className="text-xs text-muted-foreground truncate">{emp.role}</div>
                              {viewMode === 'admin' && <div className="text-xs text-muted-foreground truncate">{emp.email}</div>}
                            </div>
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs flex-shrink-0">
                              {emp.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {viewMode === 'admin' ? 'Сертификаты' : 'Мои сертификаты'}
                      </h2>
                      {viewMode === 'admin' && (
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleDownload('certificates')}>
                          <Icon name="Download" size={14} />
                        </Button>
                      )}
                    </div>

                    <ScrollArea className="h-[240px]">
                      <div className="space-y-2 pr-4">
                        {(viewMode === 'admin' ? certificates : certificates.slice(0, 1)).map((cert, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50/50 to-cyan-50/50 hover:from-blue-50 hover:to-cyan-50 transition-all"
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex-shrink-0">
                              <Icon name="Shield" size={18} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm">{cert.owner}</div>
                              <div className="text-xs text-muted-foreground truncate">до {cert.validUntil}</div>
                              {viewMode === 'admin' && <div className="text-xs text-muted-foreground truncate">{cert.issuer}</div>}
                            </div>
                            <Badge
                              variant="outline"
                              className={`text-xs flex-shrink-0 ${
                                cert.status === 'Действует'
                                  ? 'border-green-500 text-green-700 bg-green-50'
                                  : 'border-orange-500 text-orange-700 bg-orange-50'
                              }`}
                            >
                              {cert.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </Card>
              </div>

              {viewMode === 'admin' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          История тарифов
                        </h2>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleDownload('plan-history')}>
                          <Icon name="Download" size={14} />
                        </Button>
                      </div>

                      <div className="space-y-2">
                        {planHistory.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 hover:from-blue-50 hover:to-purple-50 transition-all"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0">
                                <Icon name="Package" size={16} className="text-white" />
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-sm">{item.plan}</div>
                                <div className="text-xs text-muted-foreground truncate">{item.period}</div>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className={`text-xs flex-shrink-0 ${
                                item.status === 'Активен'
                                  ? 'border-green-500 text-green-700 bg-green-50'
                                  : 'border-gray-400 text-gray-700 bg-gray-50'
                              }`}
                            >
                              {item.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          История платежей
                        </h2>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleDownload('payments')}>
                          <Icon name="Download" size={14} />
                        </Button>
                      </div>

                      <div className="space-y-2">
                        {payments.map((payment, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-green-50/50 to-emerald-50/50 hover:from-green-50 hover:to-emerald-50 transition-all"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex-shrink-0">
                                <Icon name="CreditCard" size={16} className="text-white" />
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-sm">{payment.amount}</div>
                                <div className="text-xs text-muted-foreground truncate">{payment.plan} • {payment.date}</div>
                              </div>
                            </div>
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs flex-shrink-0">
                              {payment.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
