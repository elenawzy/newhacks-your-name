from django.contrib import admin

from .models import Penpals
from .models import Letters
from .models import Friend

admin.site.register(Penpals)
admin.site.register(Letters)
admin.site.register(Friend)