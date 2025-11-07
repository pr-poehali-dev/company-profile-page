import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

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
    documents: '500 / 1000',
    users: '12 / 50',
    storage: '45 ГБ / 100 ГБ',
  };

  const planHistory = [
    { plan: 'Бизнес', period: '01.11.2025 - 01.12.2025', status: 'Активен' },
    { plan: 'Стандарт', period: '01.09.2025 - 01.11.2025', status: 'Завершён' },
    { plan: 'Стандарт', period: '01.07.2025 - 01.09.2025', status: 'Завершён' },
  ];

  const documents = [
    { name: 'Договор поставки №145', date: '06.11.2025', status: 'Подписан', recipient: 'ООО "Партнёр"' },
    { name: 'Акт выполненных работ', date: '05.11.2025', status: 'Отправлен', recipient: 'ИП Сидоров' },
    { name: 'Счет-фактура №789', date: '04.11.2025', status: 'Подписан', recipient: 'ООО "Клиент"' },
    { name: 'Спецификация к договору', date: '03.11.2025', status: 'Черновик', recipient: 'ООО "Поставщик"' },
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
  ];

  const payments = [
    { date: '01.11.2025', amount: '15 000 ₽', plan: 'Бизнес', status: 'Оплачен', method: 'Банковская карта' },
    { date: '01.10.2025', amount: '10 000 ₽', plan: 'Стандарт', status: 'Оплачен', method: 'Счёт' },
    { date: '01.09.2025', amount: '10 000 ₽', plan: 'Стандарт', status: 'Оплачен', method: 'Счёт' },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex">
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

      <div className={`flex-1 ${viewMode === 'user' ? 'pl-20 pr-20' : 'px-20'} py-8`}>
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {companyData.name}
              </h1>
              <p className="text-muted-foreground mt-2">Профиль компании в системе ЭДО</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
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
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg"
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать всё
                </Button>
              )}
            </div>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Общая информация
                </h2>
                {viewMode === 'admin' && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleDownload('general')}>
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Edit" size={16} className="mr-2" />
                      Редактировать
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Название компании</div>
                  <div className="font-semibold">{companyData.name}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Статус</div>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                    {companyData.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">ИНН</div>
                  <div className="font-semibold">{companyData.inn}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">КПП</div>
                  <div className="font-semibold">{companyData.kpp}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">ОГРН</div>
                  <div className="font-semibold">{companyData.ogrn}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Дата регистрации</div>
                  <div className="font-semibold">{companyData.registrationDate}</div>
                </div>
                <div className="col-span-2 space-y-1">
                  <div className="text-sm text-muted-foreground">Юридический адрес</div>
                  <div className="font-semibold">{companyData.address}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Генеральный директор</div>
                  <div className="font-semibold">{companyData.director}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold">{companyData.email}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="font-semibold">{companyData.phone}</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Текущий тариф
                </h2>
                {viewMode === 'admin' && (
                  <Button variant="outline" size="sm" onClick={() => handleDownload('plan')}>
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                )}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{currentPlan.name}</div>
                    <div className="text-lg text-muted-foreground">{currentPlan.price}</div>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2 text-sm">
                    Активен
                  </Badge>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Период</div>
                    <div className="font-semibold">{currentPlan.startDate} - {currentPlan.endDate}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Документы</div>
                    <div className="font-semibold">{currentPlan.documents}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Пользователи</div>
                    <div className="font-semibold">{currentPlan.users}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Хранилище</div>
                    <div className="font-semibold">{currentPlan.storage}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {viewMode === 'admin' && (
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    История тарифов
                  </h2>
                  <Button variant="outline" size="sm" onClick={() => handleDownload('plan-history')}>
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </div>

                <div className="space-y-3">
                  {planHistory.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 hover:from-blue-50 hover:to-purple-50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                          <Icon name="Package" size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{item.plan}</div>
                          <div className="text-sm text-muted-foreground">{item.period}</div>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          item.status === 'Активен'
                            ? 'border-green-500 text-green-700 bg-green-50'
                            : 'border-gray-400 text-gray-700 bg-gray-50'
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Отправленные документы
                </h2>
                {viewMode === 'admin' && (
                  <Button variant="outline" size="sm" onClick={() => handleDownload('documents')}>
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                )}
              </div>

              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 hover:from-purple-50 hover:to-pink-50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                        <Icon name="FileText" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{doc.name}</div>
                        <div className="text-sm text-muted-foreground">{doc.recipient} • {doc.date}</div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        doc.status === 'Подписан'
                          ? 'border-green-500 text-green-700 bg-green-50'
                          : doc.status === 'Отправлен'
                          ? 'border-blue-500 text-blue-700 bg-blue-50'
                          : 'border-orange-500 text-orange-700 bg-orange-50'
                      }
                    >
                      {doc.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {viewMode === 'admin' && (
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Подключенные сертификаты
                  </h2>
                  <Button variant="outline" size="sm" onClick={() => handleDownload('certificates')}>
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </div>

                <div className="space-y-3">
                  {certificates.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-cyan-50/50 hover:from-blue-50 hover:to-cyan-50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600">
                          <Icon name="Shield" size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold">{cert.owner}</div>
                          <div className="text-sm text-muted-foreground">{cert.issuer} • до {cert.validUntil}</div>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          cert.status === 'Действует'
                            ? 'border-green-500 text-green-700 bg-green-50'
                            : 'border-orange-500 text-orange-700 bg-orange-50'
                        }
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Сотрудники
                </h2>
                {viewMode === 'admin' && (
                  <Button variant="outline" size="sm" onClick={() => handleDownload('employees')}>
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                )}
              </div>

              <div className="space-y-3">
                {employees.map((emp, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 hover:from-purple-50 hover:to-pink-50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-purple-200">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white font-semibold">
                          {emp.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{emp.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {emp.role} {viewMode === 'admin' && `• ${emp.email}`}
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                      {emp.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {viewMode === 'admin' && (
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    История платежей
                  </h2>
                  <Button variant="outline" size="sm" onClick={() => handleDownload('payments')}>
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </div>

                <div className="space-y-3">
                  {payments.map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-50/50 to-emerald-50/50 hover:from-green-50 hover:to-emerald-50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                          <Icon name="CreditCard" size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{payment.amount}</div>
                          <div className="text-sm text-muted-foreground">
                            {payment.plan} • {payment.date} • {payment.method}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                        {payment.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
