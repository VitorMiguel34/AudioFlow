from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User

@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    data = request.data
    try:
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        plan = data.get('plan')

        if not all([name,email,password,plan]):
            return Response({"error": "Faltaram campos!"}, status=400)
        
        user = User.objects.create_user(
            username=name,
            email=email,
            password=password,
            plan=plan
        )
        return Response({"message": "Usuário criado com sucesso!"}, status=201)
    except Exception as e:
        return Response({"error": str(e)}, status=400)
    
@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, username=email, password=password)

    if user is not None:
        refresh = RefreshToken.for_user(user)

        return Response({
            "message": "Login realizado!",
            "tokens": {
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            },
            "user":{
                "name": user.username,
                "email": user.email,
                "plan": user.plan,
            }}, status=200)
    else:
        return Response({"error": "E-mail ou senha inválidos"}, status=401)